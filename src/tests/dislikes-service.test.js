/**
 * @file implements dislikes-service tests 
 */

// imports
import { userTogglesTuitDislikes } from "../services/dislikes-service"
import { userTogglesTuitLikes } from '../services/likes-service'
import { createUser, deleteUsersByUsername } from '../services/users-service'
import { createTuit, findTuitById, deleteTuit } from '../services/tuits-service'

/**
 * Tests if a user can dislike a Tuit. There are 2 scenarios: 
 * 1) If a user has already liked the Tuit, the Tuit likes counter should -=1, and the dislikes counter should += 1
 * 2) If a user has not liked the Tuit, the Tuit dislikes should += 1
 */
describe('test user toggles tuit dislike', () => {

  let userId = ''
  let tuitId = ''
  let username = ''
  // setup test before running test
  beforeAll( async () => {
    // insert user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id
    username = user._username
    // insert tuit
    const tuit = await createTuit(
      {
        _postedBy: userId,
        _tuit: 'This is a Tuit!!!'
      }
    )
    tuitId = tuit._id
  })

  // clean up after test runs
  afterAll( async () => {
    // remove any tuit data we created
    await deleteTuit(tuitId);
    // remove any user data we created 
    await deleteUsersByUsername(username)
  })

  test('can create tuit with REST API', async () => {
    // dislike tuit in the database
    await userTogglesTuitDislikes(userId, tuitId)

    // find disliked tuit
    const dislikedTuit = await findTuitById(tuitId)
    // verify inserted tuit's dislikes are exactly one
    expect(dislikedTuit._stats._dislikes).toEqual(1);
    // verify inserted tuit's likes are exactly 0
    expect(dislikedTuit._stats._likes).toEqual(0);
  });
})

/**
 * Tests if a user can like a Tuit. There are 2 scenarios: 
 * 1) If a user has already disliked the Tuit, the Tuit dislikes counter should -=1, and the likes counter should += 1
 * 2) If a user has not disliked the Tuit, the Tuit likes should += 1
 */
describe('test user toggles tuit like', () => {

  let userId = ''
  let tuitId = ''
  let username = ''
  // setup test before running test
  beforeAll( async () => {
    // insert user 
    const user = await createUser({
      _username: 'ellen_ripley', 
      _password: 'lv426', 
      _email: 'repley@weyland.com'}
    )
    userId = user._id
    username = user._username
    // insert tuit
    const tuit = await createTuit(
      {
        _postedBy: userId,
        _tuit: 'This is a Tuit!!!'
      }
    )
    tuitId = tuit._id
  })

  // clean up after test runs
  afterAll( async () => {
    // remove any tuit data we created
    await deleteTuit(tuitId);
    // remove any user data we created 
    await deleteUsersByUsername(username)
  })

  test('can create tuit with REST API', async () => {
    // dislike tuit in the database
    await userTogglesTuitLikes(userId, tuitId)

    // find disliked tuit
    const dislikedTuit = await findTuitById(tuitId)
    // verify inserted tuit's dislikes are exactly one
    expect(dislikedTuit._stats._dislikes).toEqual(0);
    // verify inserted tuit's likes are exactly 0
    expect(dislikedTuit._stats._likes).toEqual(1);
  });
})
