import React from 'react';
import { Helmet } from 'react-helmet-async';

const withMeta = (WrappedComponent, meta) => {
    return (props) => (
        <>
            <Helmet>
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:type" content={meta.type} />
            </Helmet>
            <WrappedComponent {...props} />
        </>
    );
};

export default withMeta;
