import { someInternalDependency } from "someInternalDependency"
import { anotherInternalDependency } from "anotherInternalDependency"


const core = internalDeps => {
  console.log(`
* But first, let's provide "myModule" default configs
  composed of internal dependencies "MyModule" needs to
  run properly. We'll call the internal dependencies
  manager "core".
`)

  const allDeps = {...internalDeps}
  console.log(`- Here's the list of internal dependencies built in "core"...`)
  console.log(allDeps)

  return allDeps
}

export default () => {
  const confs = {
    someInternalDependency,
    anotherInternalDependency
  }

  const myModule = core({...confs})

  return myModule
}
