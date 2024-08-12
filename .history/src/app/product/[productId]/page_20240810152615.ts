import MaxWidthWrapper from "@/components/MaxWidthWrapper"

interface PageProps {
    params: {
        productId: string,
        
    }
}


const Page = ({params}: PageProps) => {
    return <MaxWidthWrapper className></MaxWidthWrapper>
}

export default Page