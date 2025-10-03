import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function imageLink(path: string, width: number, height: number, size: number, extension: string) {
    return `/${path}.${width}x${height}.${size}w.${extension}`;
}

const images = import.meta.glob('/public/adv-images/*.{jpg,jpeg,png,svg}', {
    eager: true,
    query: '?url',
    import: 'default'
});

console.info(`images = ${Object.keys(images)}`)

const photos = Object.keys(images)
    .map(path => {
        console.info(`path = ${path}`)
        const name = path.split('/').pop();
        return { src: name, alt: name };
    })
    .map(({ src, ...rest }) => {
        const matcher = src!.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

        const path = matcher[1];
        const width = Number.parseInt(matcher[2], 10);
        const height = Number.parseInt(matcher[3], 10);
        const extension = matcher[4];

        console.info(`src = ${src}`)
        console.info(`path = ${path}`)
        console.info(`width = ${width}`)
        console.info(`height = ${height}`)
        console.info(`extension = ${extension}`)

        return {
            src: imageLink(path, width, height, width, extension),
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                src: imageLink(path, width, height, breakpoint, extension),
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
            ...rest,
        } as Photo;
    });

export default photos;
