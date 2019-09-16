import React, {useEffect} from 'react';
import {Highlight} from 'react-fast-highlight';
import {loadCSS} from "../../app/util/Load";
import { useRouter } from 'next/router';
import Solutions from '../../site/leetcode/_index';


const LeetCodePage = () => {
	const router = useRouter();
	const solution = router.query.id ? Solutions[router.query.id.replace(/-/g, '')] : null;

	useEffect(() => {
		loadCSS('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css');
	}, []);

	if (solution) {
		return (
				<div>
					<div>{solution.name}</div>
					<div>{
						Object.keys(solution)
								.filter(key => typeof solution[key] === "function")
								.map(key => (
										<Highlight languages={['js']} key={key}>
											{JSON.stringify(solution[key].toString(), /\\t/g, 4)
													.split('"')[1]
													.split('\\n')
													.join('\n')
											}
										</Highlight>))
					}</div>
				</div>
		);
	} else {
		return <div></div>
	}

};

export default LeetCodePage