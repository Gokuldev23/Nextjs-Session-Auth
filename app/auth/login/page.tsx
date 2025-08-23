import { Link } from 'next-view-transitions'
import React from 'react'

export default function Login() {
    return (
        <>
            <h1 style={{ viewTransitionName: "h1" }} >MY_NAME</h1>
            <Link href={'/auth/register'}>
                Login
            </Link>
        </>
    )
}
