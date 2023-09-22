import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=pokhara,kathmandu,chitwan"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1576948187290-457c015b3bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Pokhara</h2>
              <h3>{data[0]} properties</h3>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Kathmandu</h2>
              <h3>{data[1]} properties</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1633483114513-510f15270dd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Chitwan</h2>
              <h3>{data[2]} properties</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
