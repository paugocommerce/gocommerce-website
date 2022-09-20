import {React, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';





const Custom404 = () => {
	const router = useRouter();



useEffect(() => {
 
	router.push('/');
 
},[]);
    return (
		<div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="error-content">
							<div className="notfound-404">
								<h1>Oops!</h1>
							</div>
							<h3>404 - Page not found</h3>
							<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

							<Link href="/">
								<a className="btn btn-primary">Go to Homepage</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Custom404