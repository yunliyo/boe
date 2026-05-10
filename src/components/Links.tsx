import React from 'react';

interface LinkItem {
  text: string;
  href: string;
}

interface Props {
  links?: LinkItem[];
}

const Links: React.FC<Props> = ({
  links = [
    { text: '主页', href: 'https://www.liqiang.info' },
    { text: '博客', href: 'https://blog.liqiang.info' },
  ],
}) => {
  return (
    <div className="links-module">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span style={{ margin: '0 1px' }}>&nbsp;</span>}
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Links;
