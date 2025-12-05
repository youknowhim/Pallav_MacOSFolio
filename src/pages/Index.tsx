import { Desktop } from '@/components/desktop/Desktop';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pallav Rai | Software Developer Portfolio</title>
        <meta name="description" content="Pallav Rai - Software Developer specializing in full-stack development, machine learning, and building impactful applications. VIT Bhopal CSE student." />
        <meta name="keywords" content="Pallav Rai, Software Developer, Portfolio, React, Full Stack, Machine Learning, VIT Bhopal" />
        <meta property="og:title" content="Pallav Rai | Software Developer Portfolio" />
        <meta property="og:description" content="Interactive MacOS-style portfolio showcasing projects, experience, and skills." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pallavrai.dev" />
      </Helmet>
      <Desktop />
    </>
  );
};

export default Index;
