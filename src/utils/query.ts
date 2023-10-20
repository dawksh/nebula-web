
import axios from 'axios';

const goerli_url = "https://api.studio.thegraph.com/query/18071/nebula-goerli/version/latest"

const getAllBonds = async (element: string) => {

    const query = `
{
  bondCreateds(where: {element: "${element}"}) {
    id
    atom
    element
    atomUid
  }
}
`;
    const { data } = await axios.post(goerli_url, { query });

    return data.data.bondCreateds;
}

export { getAllBonds }
