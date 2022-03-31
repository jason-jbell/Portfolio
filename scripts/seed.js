'use strict'

const {db, models: {Project}} = require('../src/server/db')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced')

  // creating projects
  const [caropolis, attackOnFullstack] = await Promise.all([
    Project.create({
      name: 'Caropolis',
      deployedLink: 'caropolis.herokuapp.com'
    }),
    Project.create({
      name: 'Attack on Fullstack',
      deployedLink: 'https://attackonfullstack.itch.io/attackonfullstack'
    })
  ])
  return {
    projects: {
      caropolis,
      attackOnFullstack
    }
  }
}

async function runSeed() {
  console.log('beginning seed')
  try {
    await seed();
  } catch (error) {
    console.error(error)
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed;