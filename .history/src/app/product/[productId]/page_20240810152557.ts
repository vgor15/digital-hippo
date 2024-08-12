import MaxWidthWrapper from "@/components"

interface PageProps {
    params: {
        productId: string,
        
    }
}


const Page = ({params}: PageProps) => {
    return <MaxWidthWrapper></MaxWidthWrapper>
}

export default Page