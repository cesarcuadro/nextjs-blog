import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
    <div>
        <h1>posts</h1>
        <Link href="/">home</Link>
    </div>
    )
}

export default page