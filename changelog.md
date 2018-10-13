# Changelog
All notable changes to this project will be documented in this file.
#### [Unreleased] 2018-06-03
### Known Issues


### Added
- Want an app? section on homepage
- Download page with 4 platforms logo

##################################################################
#### [Unreleased] 2018-06-03
### Known Issues


### Added
- Breadcrumbs plugin
- Logo navigates to homepage when it is being clicked

### Changed
- Icon is not on the middle of narrow and mobile line-height view
- Banner image on narrow and mobile view is not being scaled

##################################################################
#### [Unreleased] 2018-05-28
### Known Issues
- Icon is not on the middle of narrow and mobile line-height view
- Banner image on narrow and mobile view is not being scaled
- Vertical text slide view

### Added
- Changelog.md
- Slide text on index.html read from _data/navigation.yml
-- assets/css/slide/bxslider.css
-- assets/css/images/controls-trans.png
-- assets/css/images/controls.png
-- assets/css/images/bx_loader.gif
-- assets/js/slide/jquery.bxslider.js
-- assets/js/jquery-3.1.1.min.js
- Separate menu from _config/yml to _data/navigation.yml
- Highlight.html for slide show
- Exclude configuration config.yml

### Changed
- Assets/css/style.css for wrapper wrapper1 style on slide section
- Include condition for slide display on _include/header.html, index.html, _include/footer.html
-- if page.title contains == "Home"
- Edit the image for slide navigation to be prettier look and feel