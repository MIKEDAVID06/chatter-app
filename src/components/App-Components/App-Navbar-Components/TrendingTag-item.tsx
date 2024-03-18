import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const TrendingTagItem: React.FC = function () {
  const trendingTags: string[] = ["Programming", "Data science", "Technology", "Machine Learning", "Politics"];

  return (
    <div className={style.trend_tag_item_container}>
      {/* Render each trending tag as NavLink */}
      {trendingTags.map((tag,_) => (
        <NavLink to={"/feeds"} className={style.trend_tag_item_link} key={tag}>
          {tag}
        </NavLink>
      ))}
      {/* "See all" option */}
      <NavLink to={"/trending"} className={style.trend_tag_item_see_all_link}>
        See all
      </NavLink>
    </div>
  );
}

export default TrendingTagItem;
