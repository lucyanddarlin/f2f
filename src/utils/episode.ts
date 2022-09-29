export interface RawEpisode {
  date: string
  hosts: string[]
  guests: string[]
  title: string
  description: string
}

export interface Episode extends Omit<RawEpisode, 'date'> {
  date: Date
  id: string
}

export const getEpisodeId = (filename: string) => {
  return /episode[/\\](.*?)\.md$/.exec(filename)?.[1] ?? undefined
}

export const getAllEpisode = () =>
  Object.entries(
    import.meta.glob<RawEpisode>('../episode/*.md', { eager: true })
  ).map(([filename, module]): Episode => {
    const id = getEpisodeId(filename)!
    return {
      ...module,
      id,
      date: new Date(module.date),
    }
  })
