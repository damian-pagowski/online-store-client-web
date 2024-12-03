import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getCategories } from "../../action-creators/categories-actions-creator";
import "./ProductCategories.css";

const ProductCategoriesAccordion = ({ filterHandler, resetResults }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(_getCategories());
  }, [dispatch]);

  const toggleIcon = (elementId) => {
    const icon = document.getElementById(elementId);
    if (icon) {
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    }
  };

  return (
    <div>
      <div className="accordion">
        <div className="card">
          <div className="card-header">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed category-name"
                type="button"
                onClick={resetResults}
                id="show-all-btn"
              >
                Show All
              </button>
            </h2>
          </div>
        </div>
      </div>

      {Object.keys(categories).length > 0 &&
        Object.keys(categories).map((key, index) => (
          <div
            className="accordion"
            id={`product-categories-accordion-${index}`}
            key={index}
          >
            <div className="card">
              <div className="card-header" id={`heading-${index}`}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed category-name"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse-${index}`}
                    aria-expanded="false"
                    id={categories[key].name}
                    aria-controls={`collapse-${index}`}
                    onClick={() => toggleIcon(`collapse-${index}-icon`)}
                  >
                    {categories[key].display}{" "}
                    <i
                      id={`collapse-${index}-icon`}
                      className={`fa fa-chevron-${index === 0 ? "up" : "down"}`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </h2>
              </div>

              <div
                id={`collapse-${index}`}
                className={`collapse ${index === 0 && "show"}`}
                aria-labelledby={`heading-${index}`}
                data-parent={`#product-categories-accordion-${index}`}
              >
                <div className="card-body">
                  <ul className="list-group">
                    {categories[key].subcategories.map((sub, subIndex) => (
                      <li
                        className="list-group-item"
                        key={subIndex}
                        id={sub.name}
                        onClick={() =>
                          filterHandler(categories[key].name, sub.name)
                        }
                      >
                        {sub.display}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCategoriesAccordion;