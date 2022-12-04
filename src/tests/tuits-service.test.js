/**
 * @file implements the tuit-service test 
 */

// imports 
import {
  createTuit,
  deleteTuitByUserId, findAllTuits,
  findTuitById
} from "../services/tuits-service";

import { createUser, deleteUser } from "../services/users-service"

/** 
 * Tests if a user can create a Tuit through the REST endpoint
 */
describe('can create tuit with REST API', () => {
  // sample tuit to insert
  let userId = ''

  // setup test before running test
  beforeAll(async () => {
    // create user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id

    // remove any/all tuits to make sure we create it in the test
    return deleteTuitByUserId(userId);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    deleteUser(userId)
    return deleteTuitByUserId(userId);
  })

  test('can create tuit with REST API', async () => {
    // insert new tuit in the database
    const tuit = {
      _postedBy: userId,
      _tuit: "Hello world!"
    }

    const newTuit = await createTuit(tuit);

    // verify inserted tuit's properties match parameter tuit
    expect(newTuit._postedBy).toEqual(userId);
    expect(newTuit._tuit).toEqual(tuit._tuit);
  });
});

/** 
 * Tests if a Tuit can be deleted by Id through the REST endpoint
 */
describe('can delete tuit wtih REST API', () => {
  // sample tuit to insert
  let userId = ''

  // setup test before running test
  beforeAll(async () => {
    // create user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteTuitByUserId(userId);
  })

  test('can delete tuit wtih REST API', async () => {
    const tuit = {
      _postedBy: userId,
      _tuit: "Hello world!"
    }
    // delete a tuit by their id. Assumes tuit already exists
    const newTuit = await createTuit(tuit);
    const status = await deleteTuitByUserId(newTuit._postedBy);

    // verify we deleted at least one tuit by their id
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});


/** 
 * Tests if a Tuit can be retrieved by Id using the REST endpoint
 */
describe('can retrieve a tuit by their primary key with REST API', () => {
  // sample tuit to insert
  let userId = ''

  // setup test before running test
  beforeAll(async () => {
    // create user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id

    return deleteTuitByUserId(userId)
  })

  // clean up after ourselves
  afterAll(() => {
    // remove any data we inserted
    return deleteTuitByUserId(userId)
  })

  test('can retrieve a tuit by their primary key with REST API', async () => {

    const tuit = {
      _postedBy : userId,
      _tuit : "Hello World!"
    }
    // insert the tuit in the database
    const newTuit = await createTuit(tuit);
    // verify new tuit matches the parameter tuit
    expect(newTuit._postedBy).toEqual(tuit._postedBy);
    expect(newTuit._tuit).toEqual(tuit._tuit);

    // retrieve the tuit from the database by its primary key
    const existingUser = await findTuitById(newTuit._id);
    // verify retrieved tuit matches parameter tuit
    expect(existingUser._postedBy._id).toEqual(tuit._postedBy);
    expect(existingUser._tuit).toEqual(tuit._tuit);
  })
})

/** 
 * Tests all Tuits can be retrieved using the REST endpoint
 */
describe('can retrieve all tuits with REST API', () => {
  // sample tuits we'll insert to then retrieve
  let userId = ''

  let tuits = [
    {
      _postedBy: userId,
      _tuit: 'This is a Tuit!!!'
    },
    {
      _postedBy: userId,
      _tuit: 'This is b Tuit!!!'
    }
  ]

  // setup data before test
  beforeAll(async () => {
    // insert several known tuits
    // create user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id

    tuits[0]._postedBy = userId
    tuits[1]._postedBy = userId

    Promise.all(tuits.map((_tuit) => {    
      createTuit({
        _tuit: _tuit._tuit,
        _postedBy: _tuit._postedBy
      })
    })
  )})

  // clean up after ourselves
  afterAll(() =>
    // delete the tuits we inserted
    Promise.all(tuits.map((_tuit) =>
    deleteTuitByUserId(_tuit._postedBy)
    )
  ))

  test('can retrieve all tuits from REST API', async () => {
    // retrieve all the tuits
    const tuitsRetrieved = await findAllTuits();
    // there should be a minimum number of tuits
    expect(tuitsRetrieved.length).toBeGreaterThanOrEqual(tuits.length);

    // let's check each tuit we inserted
    const tuitsWeInserted = tuitsRetrieved.filter(
      tuit => tuits.indexOf(tuit._tuit) >= 0);

    // compare the actual users in database with the ones we sent
    tuitsWeInserted.forEach(tuit => {
      const _tuit = tuits.find(tuit => tuit === tuit._tuit);
      expect(tuit._postedBy).toEqual(_tuit._postedBy);
      expect(tuit._tuit).toEqual(_tuit._tuit);
    });
  });
});

