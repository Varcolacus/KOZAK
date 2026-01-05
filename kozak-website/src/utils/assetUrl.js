export function assetUrl(path) {
    if (!path) return path;

    const base = import.meta.env.BASE_URL || '/';
    const normalized = String(path).replace(/^\//, '');

    if (!base.endsWith('/')) return `${base}/${normalized}`;
    return `${base}${normalized}`;
}
