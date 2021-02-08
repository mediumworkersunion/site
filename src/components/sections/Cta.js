import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { useContentful } from '../../contentful/useContentful';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const submitForm = (cb) => (ev, overrideForm) => {
    ev.preventDefault();
    const form = overrideForm || ev.target;
    const data = new FormData(form);
    console.log(form, data)
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        cb({ status: "SUCCESS" });
      } else {
        cb({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const {homepageData: data} = useContentful()

  const [hasSubmitted, setWasSubmitted] = React.useState(false)
  const [hasReturned, setWasReturned] = React.useState(false)
  const [wasSuccessful, setSuccessful] = React.useState(false)
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
      id="email"
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              {data['Contact Text'].text}
              </h3>
          </div>
          <div className="cta-action" style={{position:'relative'}}>
            <form
              onSubmit={(e) => {
                setWasSubmitted(true)
                return submitForm(({status})=> {
                  setWasReturned(true)
                  setSuccessful(status === 'SUCCESS')
                  console.log(status)
                })(e)
              }}
              action="https://formspree.io/f/meqpdvpn"
              method="POST"
            >
            <Input disabled={hasSubmitted?'disabled':undefined} name="email" id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="youremail@gmail.com">
              {!hasSubmitted && <svg style={{zIndex: 5}}
              width="16" height="12" xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                e.preventDefault()
                  const form = targetElement.closest('form');
                  setWasSubmitted(true)
                    return submitForm(({status})=> {
                    console.log(status)
                  })(e, form)
                }}>
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>}
              {hasSubmitted && !hasReturned && (<div>
                <style jsx>{`
                  @keyframes rotation {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(359deg);
                    }
                  }
                  img.loading {
                    position: absolute; 
                    right: 8px;
                    top: 30%;
                    transform: translateY(-50%);
                    width: 24px;
                    height: 24px;
                    animation: rotation 2s infinite linear;
                  }
                `}</style>
                  <img className="loading" src="/images/loading.svg"/>
                </div>)}
                {wasSuccessful && (<div>
                  <style jsx>{`
                    img.success {
                      position: absolute; 
                      right: 8px;
                      top: 50%;
                      transform: translateY(-50%);
                      width: 32px;
                      height: 32px;
                    }
                  `}</style>
                  <img className="success" src="/images/check.svg"/>
                </div>)}
                {hasReturned && !wasSuccessful && (<div>
                  <style jsx>{`
                    img.fail {
                      position: absolute; 
                      right: 8px;
                      top: 50%;
                      transform: translateY(-50%);
                      width: 32px;
                      height: 32px;
                    }
                  `}</style>
                  <img className="fail" src="/images/error.svg"/>
                </div>)}
            </Input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;