// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const withMeta = (WrappedComponent, meta) => {
//     return (props) => (
//         <>
//             <Helmet>
//                 <meta property="og:title" content={meta.title} />
//                 <meta property="og:description" content={meta.description} />
//                 <meta property="og:image" content={meta.image} />
//                 <meta property="og:url" content={meta.url} />
//                 <meta property="og:type" content={meta.type} />
//             </Helmet>
//             <WrappedComponent {...props} />
//         </>
//     );
// };

// export default withMeta;

// src/components/seo.js

import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image, lang = "en", meta = [], keywords = [] }) => {
  const metaDescription = description || "Default description";
  const metaImage = image || "https://www.shutterstock.com/image-vector/seo-meta-data-optimization-concept-260nw-2027713787.jpg"; // Path to a default image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        ...meta,
      ]}
    />
  );
};

export default SEO;
