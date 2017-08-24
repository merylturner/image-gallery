import PropTypes from 'prop-types';

let id = 0;
const images = [
    { id: ++id, title: 'cute bunny', description: 'very cute bunny', url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
    { id: ++id, title: 'another cute bunny', description: 'very, very cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
    { id: ++id, title: 'fairly cute bunny', description: 'pretty much a cute bunny', url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' },
];

images.PropTypes = {
    optionalArrayOf: PropTypes.arrayOf(PropTypes.object)
}
export default images;