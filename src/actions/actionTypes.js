export const INCREMENT = 'INCREMENT';

export function increment(amount) {
    return { type: INCREMENT, amount: amount }
}