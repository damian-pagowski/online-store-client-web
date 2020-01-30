import React from "react";
import "./ProductCategories.css";
import { connect } from "react-redux";
import { _getCategories } from "../../action-creators/categories-actions-creator";

class ProductCategoriesAccordion extends React.Component {
  componentDidMount() {
    this.props.dispatch(_getCategories());
  }
  render() {
    const categories = this.props.categories;
    console.log("> categories > " + JSON.stringify(categories));
    return (
      <div>
        {Object.keys(categories).length > 0 &&
          Object.keys(categories).map((key, i) => (
            <div className="accordion" id="productCategoriesAccordion" key={i}>
              <div className="card">
                <div className="card-header" id={`heading-${i}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed category-name"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse-${i}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${i}`}
                    >
                      {categories[key].display}
                    </button>
                  </h2>
                </div>

                <div
                  id={`collapse-${i}`}
                  className={`collapse ${i == 0 && "show"}`}
                  aria-labelledby={`heading-${i}`}
                  data-parent="#productCategoriesAccordion"
                >
                  <div className="card-body">
                    <ul className="list-group">
                      {Object.keys(categories[key].subcategories).map(
                        (sub, i) => (
                          <li
                            className="list-group-item"
                            subcategory={sub}
                            key={i}
                          >
                            {categories[key].subcategories[sub]}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories,
  };
}

export default connect(mapStateToProps)(ProductCategoriesAccordion);
