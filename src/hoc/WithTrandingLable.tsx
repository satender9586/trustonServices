const WithTrandingLable = <P extends object>(
  ServiceItemCard: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <div >
        <div className="absolute text-start bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce z-10">
          Trending
        </div>
           <ServiceItemCard {...props} />
      </div>
    );
  };
};

export default WithTrandingLable;
