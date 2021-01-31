import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from '../../elements/Image';


import { useContentful } from '../../../contentful/useContentful';

const Logo = ({
  className,
  ...props
}) => {

  const {homepageData: data} = useContentful()

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link href="/"><div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Image
            src={data['Logo'].media.url}
            alt={data['Logo'].text}
            width={32}
            height={32} />
          <span className="text-m" style={{marginLeft: '8px', position: 'relative', top:3, fontFamily: 'BebasNeue', fontWeight: 400}}>{data['Name'].text}</span>
          </div>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;