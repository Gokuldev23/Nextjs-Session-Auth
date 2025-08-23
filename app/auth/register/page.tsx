import { Link } from 'next-view-transitions'
import React from 'react'

export default function Register() {
    return (
        <>
            <Link href={'/auth/login'} >
                Register
            </Link>
            <h1 style={{viewTransitionName:"h1"}} className='mt-4'>MY_NAME</h1>
        </>
    )
}
