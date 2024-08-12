import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <MaxWidthWrapper className="bg-white">
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg"></div>
    </div>
  </MaxWidthWrapper>;
};

export default Page;
