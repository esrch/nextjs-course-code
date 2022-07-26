import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some adress 5, 12345 Some City',
		description: 'This is a first meetup',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some adress 10, 12345 Some City',
		description: 'This is a second meetup',
	},
	{
		id: 'm3',
		title: 'A Third Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some adress 15, 12345 Some City',
		description: 'This is a Third meetup',
	},
];

export default function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
}
