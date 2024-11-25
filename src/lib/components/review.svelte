<script lang="ts">
	import {Root, Header, Title, Description,Content, Footer } from '$lib/components/ui/card';
	import dayjs from 'dayjs';

	const { reviewerName, reviewerEmail, rating, comment, date }: {
		reviewerName: string, reviewerEmail: string,
		rating: number, comment: string, date: string
	} = $props();
</script>

<Root>
	<Header>
		<Title>
			{reviewerName}
		</Title>
		<Description>{reviewerEmail}
		</Description>
	</Header>
	<Content>
		<p>{comment}</p>
		{rating} / 5
	</Content>
	<Footer>
		{dayjs(date).format('DD/MM/YYYY')}
	</Footer>
</Root>