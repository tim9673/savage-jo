export type EntityMap<T> = {
  [key in number]: T
}

export interface EntityState<T> {
  byId: EntityMap<T>
  allIds?: number[]
}

interface Entity {
  id: Id
}

type Id = number

export const addEntityToNormalized = <T extends Entity>(
  entityList: EntityMap<T>,
  entityToAdd: T,
  idList?: Id[]
): [EntityMap<T>, Id[]] => {
  const newEntityList = {
    ...entityList,
    [entityToAdd.id]: {
      ...entityList[entityToAdd.id],
      ...entityToAdd
    }
  }

  if (!idList) {
    return [newEntityList, [entityToAdd.id]]
  }

  if (idList.includes(entityToAdd.id)) {
    return [newEntityList, idList]
  }

  return [newEntityList, [...idList, entityToAdd.id]]
}

export const removeEntityFromNormalized = <T extends Entity>(
  entityList: EntityMap<T>,
  id: Id,
  idList?: Id[]
): [EntityMap<T>, Id[]] => {
  const { [id]: entity, ...newEntityList } = entityList

  if (!idList) {
    return [newEntityList, []]
  }

  const newIdList = idList.filter((i) => i !== id)
  return [newEntityList, newIdList]
}

export const denormalizeArray = <T extends Entity>(currentEntityMap: EntityMap<T>, ids?: Id[] | null) => {
  if (!ids) {
    return null
  }

  return ids.map((id) => currentEntityMap[id])
}

export const normalizeArray = <T extends Entity>(currentEntityMap: EntityMap<T>, entities: T[], currentIds?: Id[]) => {
  const entityMap = { ...currentEntityMap }
  const ids: Id[] = currentIds ? [...currentIds] : []
  entities.forEach((entity) => {
    if (!ids.includes(entity.id)) {
      ids.push(entity.id)
    }
    entityMap[entity.id] = { ...entityMap[entity.id], ...entity }
  })

  return [entityMap, ids] as const
}
