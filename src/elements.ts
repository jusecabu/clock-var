function $<T extends HTMLElement>(query: string): T | null {
    const element = document.querySelector<T>(query);

    return element;
}

export const clockElement = $('#clock')!;
export const leadingZeros = $<HTMLInputElement>('#leading-zeros')!;
