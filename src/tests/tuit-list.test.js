import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";
import {deleteTuit} from '../services/tuits-service'


const MOCKED_TUITS = [{ _tuit: "a's tuit", _postedBy: '637aec1fedd22bccce35919a' }, 
                      { _tuit: "b's tuit", _postedBy: '637af4111b15171c85b10d2d' }];

// const MOCKED_TUITS = ['fwqrqwef', 'qwefqwfe']
test('tuit list renders static tuit array', () => {
  // TODO: implement this
  render(
    <HashRouter>
      <Tuits tuits={MOCKED_TUITS} />
    </HashRouter>
    );
  const linkElement2 = screen.getByText(/a's tuit/i);
  const linkElement3 = screen.getByText(/b's tuit/i);
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  // TODO: implement this

  const tuits = await findAllTuits();
  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>);
    const linkElement2 = screen.getByText(/a's tuit/i);
    expect(linkElement2).toBeInTheDocument();
})

test('tuit list renders mocked', async () => {
  // TODO: implement this
    // jest.mock('axios');

    axios.get = jest.fn()

    // axios.get.mockResolvedValueOnce({ data: {users: MOCKED_USERS}})
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
  
    const response = await findAllTuits();
    const tuits = response.tuits;
  
    render(
      <HashRouter>
        <Tuits tuits={tuits}/>
      </HashRouter>);
  
  const linkElement2 = screen.getByText(/a's tuit/i);
  const linkElement3 = screen.getByText(/b's tuit/i);
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();

});
