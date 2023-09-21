export function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', {
        month: 'short',
    });
}

export function TransferDate(date: any) {

    const year = date?.slice(0, 4)
    const month = parseInt(date?.slice(5, 7))
    const day = parseInt(date?.slice(8, 10))

    const newFormat = `${day} ${getMonthName(month)}, ${year}`
    return newFormat
}

export function swapElements(data: any[], Index: number) {
    return [data[Index], ...data?.filter(item => item?.model?.id !== data[Index]?.model?.id)]
}

export const _Search = (text: string, data: any, setFilter: any, updateQeury: any) => {
    if (text) {
        const filter = data.filter((item: any) => {
            const itemTitle = item?.title ? item?.title.toUpperCase() : "".toUpperCase();
            const itemContent = item?.content ? item?.content.toUpperCase() : "".toUpperCase();
            const itemData = item?.short_description ? item?.short_description.toUpperCase() : "".toUpperCase();
            const textData = text.toUpperCase();
            return (itemTitle.indexOf(textData) > -1) || (itemContent.indexOf(textData) > -1) || (itemData.indexOf(textData) > -1)
        });
        setFilter(filter);
        updateQeury(text);
    } else {
        setFilter(data);
        updateQeury(text);
    }
}

