import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <MaxWidthWrapper className="bg-white">
    <div className="bg-white">
      <div className="mxa"></div>
    </div>
  </MaxWidthWrapper>;
};

export default Page;
