import core from 'core'

const myModule = coreConfigs => {
  console.log(`Let's build an ESM module called "myModule" using Yarn v2 (Berry)`)

  const allInternals = coreConfigs()

  return allInternals
}

export default (() => {
  let main = myModule(core)

  console.log(`
🍻 And voila! Now "myModule" is up and chuggin'.
- Cheers!
`)
  return main
})()
