import React, {useEffect, useState} from 'react';
import {Highlight} from 'react-fast-highlight';
import {loadCSS} from "../../app/util/Load";
import {useRouter} from 'next/router';
import Solutions from '../../site/leetcode/_index';
import UseFetchData from '../../app/util/UseFetchData';

const LeetCodePage = () => {
	const router = useRouter();
	const [solution] = useState(router.query.id ? Solutions[router.query.id.replace(/-/g, '')] : null);
	const [problemInfo, setProblemInfo] = useState({});
	const [dataState, setUrl] = UseFetchData();

	useEffect(() => {
		loadCSS('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css');
	}, []);

	useEffect(() => {
		if (solution) {
			const url = {
				url: 'https://leetcode-cn.com/graphql',
				options: {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					mode: 'no-cors',
					credentials: 'omit', // include, same-origin, *omit
					body: JSON.stringify({
						operationName: "questionData",
						query: "query questionData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    boundTopicId\n    title\n    titleSlug\n    content\n    translatedTitle\n    translatedContent\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    isLiked\n    similarQuestions\n    contributors {\n      username\n      profileUrl\n      avatarUrl\n      __typename\n    }\n    langToValidPlayground\n    topicTags {\n      name\n      slug\n      translatedName\n      __typename\n    }\n    companyTagStats\n    codeSnippets {\n      lang\n      langSlug\n      code\n      __typename\n    }\n    stats\n    hints\n    solution {\n      id\n      canSeeDetail\n      __typename\n    }\n    status\n    sampleTestCase\n    metaData\n    judgerAvailable\n    judgeType\n    mysqlSchemas\n    enableRunCode\n    enableTestMode\n    envInfo\n    __typename\n  }\n}\n",
						variables: {
							titleSlug: solution.seoName || solution.name
						}
					}),
				}
			};
			setUrl(url);
		}
	}, [solution]);

	useEffect(() => {
		const {isLoading, data, error} = dataState;

		if (data) {
			setProblemInfo(data);
		}

		return () => {

		};
	}, [dataState]);

	if (solution) {
		return (
				<div>
					<div>{solution.name}</div>
					<div>{JSON.stringify(problemInfo)}</div>
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