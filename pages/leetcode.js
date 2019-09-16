import React, {useEffect} from 'react';
import {loadCSS} from "../app/util/Load";
import Solutions from '../site/leetcode/_index';
import Link from 'next/link';

const LeetCodePage = () => {
	useEffect(() => {
		loadCSS('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css');
	}, []);

	return (
			<div>
				<div>Solutions list</div>
				<div>{
					Object.keys(Solutions).map(solution => (
							<div key={solution}>
								<Link href="/problems/[id]" as={`/problems/${solution}`}>
									<a>{solution}</a>
								</Link>
							</div>
					))
				}</div>
			</div>
	);
};

export default LeetCodePage