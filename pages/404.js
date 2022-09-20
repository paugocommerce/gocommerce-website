import {React, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';





const Custom404 = () => {
	
}

export const getServerSideProps = () => {
	return { redirect: { destination: "/", permanent: false } }; 
  };

export default Custom404