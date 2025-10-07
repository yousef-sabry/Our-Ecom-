import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="mb-3" style={{ fontSize: "30px", textAlign: "center" , fontWeight:"bold"}}>
      {title}
    </h2>
  );
});

export default Heading;
