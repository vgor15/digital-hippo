import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <MaxWidthWrapper className="bg-white">
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product Details  */}
        <div className="lg:max-w-lg lg:self-end">
          <ol className="flex"></ol>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>;
};

export default Page;
