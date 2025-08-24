import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductEditApiThunk } from "../../redux/ProductReducer";
import { useFormik } from "formik";

const ProductEdit = () => {
  const { productEdit } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: productEdit?.id ?? "",
      name: productEdit?.name ?? "",
      price: productEdit?.price ?? "",
      description: productEdit?.description ?? "",
      shortDescription: productEdit?.shortDescription ?? "",
      quantity: productEdit?.quantity ?? "",
      image: productEdit?.image ?? "",
      feature: productEdit?.feature ?? false,
    },
    onSubmit: (values) => {
      const payload = {
        ...values,
        price: values.price === "" ? 0 : Number(values.price),
        quantity: values.quantity === "" ? 0 : Number(values.quantity),
      };
      console.log("values", payload);
      // dispatch(updateProductThunk(payload));
    },
  });

  useEffect(() => {
    dispatch(getAllProductEditApiThunk(id));
  }, [dispatch, id]);

  console.log(productEdit, "productEdit");

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Edit Product</h2>
      <div className="row">
        <div className="col-md-12">
          <form className="bg-white p-4" onSubmit={frm.handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-4 text-center">
                <img
                  src={frm.values.image || "https://via.placeholder.com/200"}
                  alt="product"
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px" }}
                />
              </div>

              <div className="col-md-8">
                <div className="mb-3">
                  <label htmlFor="id" className="form-label fw-semibold">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={frm.values.id}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={frm.values.name}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label fw-semibold">Price ($)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={frm.values.price}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="feature"
                    name="feature"
                    checked={frm.values.feature}
                    onChange={(e) => frm.setFieldValue("feature", e.target.checked)}
                  />
                  <label className="form-check-label fw-semibold" htmlFor="feature">
                    Feature
                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    value={frm.values.quantity}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label fw-semibold">Image Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={frm.values.image}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="shortDescription" className="form-label fw-semibold">
                Short Description
              </label>
              <textarea
                className="form-control"
                id="shortDescription"
                name="shortDescription"
                rows={2}
                value={frm.values.shortDescription}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-semibold">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={4}
                value={frm.values.description}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-dark px-4 fw-bold">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;