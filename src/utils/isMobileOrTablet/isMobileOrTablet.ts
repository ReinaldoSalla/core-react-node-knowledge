const isMobileOrTablet = (userAgent: string): boolean => {
  const elements = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i    
  ];
  return elements.some((element) => userAgent.match(element))
};

export default isMobileOrTablet;