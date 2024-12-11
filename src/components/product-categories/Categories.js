import React, { useEffect, useContext, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./Categories.css";

const Categories = ({ filterHandler, resetResults }) => {
  const { categories, fetchCategories } = useContext(CategoriesContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const toggleIcon = (elementId) => {
    const icon = document.getElementById(elementId);
    if (icon) {
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    }
  };

  const handleAccordionClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    toggleIcon(index)
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
                    className="btn btn-link category-name"
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                    id={categories[key].name}
                  >
                    {categories[key].display}{" "}
                    <i
                      id={`collapse-${index}-icon`}
                      className={`fa ${
                        expandedIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                      }`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </h2>
              </div>

              <div
                id={`collapse-${index}`}
                className={`collapse ${expandedIndex === index ? "show" : ""}`}
                aria-labelledby={`heading-${index}`}
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

export default Categories;