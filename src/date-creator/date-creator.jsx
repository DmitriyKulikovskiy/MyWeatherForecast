export const dateCreator = () => {

    let i = new Date();
    let getFullDate = i.toLocaleString('en-gb', { day:'numeric', weekday: 'long', month: 'long' });

    return getFullDate
  }

export let date = (milliseconds) => new Date(milliseconds * 1000).toLocaleString('en-gb', { day:'numeric', weekday: 'long', month: 'long' })
export let getTime = milliseconds => new Date(milliseconds * 1000).toLocaleString('en-gb', {hour: '2-digit', minute: 'numeric'})
