import MeetupDetail from '../components/meetups/MeetupDetail';

export default function MeetupDetails(props) {
	return (
		<MeetupDetail
			title={props.meetupData.title}
			image={props.meetupData.image}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: meetupId,
				title: 'A First Meetup',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
				address: 'Some Street 5, Some City',
				description: 'The meetup description',
			},
		},
	};
}
