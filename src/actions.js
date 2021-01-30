export const dec = () => ({
    type: 'DEC'
}) //action creator function!
export const inc = () => ({
    type: 'INC'
}) //action creator function!
export const rnd = () =>

    {
        let payload = 0;
        const value = Math.floor(Math.random() * 10)
        const sign = Math.floor(Math.random() * 10)
        sign < 5 ? payload = -1 * value : payload = value

        return {
            type: 'RND',
            payload
        }
    } //action creator function!