const SectionDevider = ({ content = "default content" }: any) => {
  return (
    <div className="w-full my-5">
      <div className="border-b">
        <h4 className="text-center text-2xl pb-2">{content}</h4>
      </div>
    </div>
  );
};

export default SectionDevider;
