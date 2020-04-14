// Here we bootstrap the primary entry point for our module with
// the same active context our node process started via yarn.

const { createRequire } = require('module')

const requireTopLevelManifest = createRequire(`${process.env.INIT_CWD}/package.json`)
const resolveTopLevelDependency = requireTopLevelManifest.resolve(`lib`)

module.exports = requireTopLevelManifest(resolveTopLevelDependency)
