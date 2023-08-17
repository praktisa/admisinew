
export default async function Auth(option: string) {
    const res = await fetch(`${process.env.HOST_URL}/Admin/api/preparation?option=${option}`, {
        method: "GET",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        next: { revalidate: 60 },

    })

    // mantap jiwa
    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()

}