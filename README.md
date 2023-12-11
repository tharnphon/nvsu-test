├── .eslintrc.cjs
├── .expo
│  ├── devices.json
│  ├── packager-info.json
│  ├── README.md
│  └── settings.json
├── .expo-shared
│  └── assets.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .prettierrc.json
├── .vscode
│  ├── component.code-snippets
│  ├── screen.code-snippets
│  └── settings.json
├── app.json
├── App.tsx
├── babel.config.js
├── components
│  ├── AddressItem.tsx
│  ├── AnimatedAppearance.tsx
│  ├── AuthLayout.tsx
│  ├── AutoCompleteLocation.tsx
│  ├── Badge.tsx
│  ├── BlogItem.tsx
│  ├── BottomSheetFixed.tsx
│  ├── BottomSheetMenu.tsx
│  ├── BottomSheetPhotoChoose.tsx
│  ├── BottomSheetRelative.tsx
│  ├── CardItem.tsx
│  ├── CartItem.tsx
│  ├── CategoryItem.tsx
│  ├── CollectionItem.tsx
│  ├── ColorItem.tsx
│  ├── Container.tsx
│  ├── Content.tsx
│  ├── CustomProductHorizontal.tsx
│  ├── CustomRating.tsx
│  ├── FeatureItem.tsx
│  ├── FloatingButton.tsx
│  ├── FocusAwareStatusBar.tsx
│  ├── FormikAutoComplete.tsx
│  ├── FormikMultipleSelect.tsx
│  ├── FormikSelect.tsx
│  ├── HeaderCart.tsx
│  ├── HeaderChat.tsx
│  ├── HeaderNotification.tsx
│  ├── HideWithKeyboard.tsx
│  ├── IconWithBadge.tsx
│  ├── index.ts
│  ├── MenuCard.tsx
│  ├── MethodItem.tsx
│  ├── NavigationAction.tsx
│  ├── OTPInput.tsx
│  ├── PostItem.tsx
│  ├── ProductCard.tsx
│  ├── ProductHorizontal.tsx
│  ├── ProgressBar.tsx
│  ├── RefreshControl.tsx
│  ├── ReviewItem.tsx
│  ├── SelectItem.tsx
│  ├── ShippingDetailsItem.tsx
│  ├── SizeItem.tsx
│  ├── StatusScreen.tsx
│  ├── SvgIcon.tsx
│  ├── TabBar.tsx
│  ├── TabItem.tsx
│  ├── TagItem.tsx
│  ├── Text.tsx
│  ├── TimeItem.tsx
│  └── TitleBar.tsx
├── eas.json
├── google-services.json
├── hooks
│  ├── GlobalModalContext.tsx
│  ├── SSEContext.tsx
│  ├── useAppBottomSheet.ts
│  ├── useAppLanguage.ts
│  ├── useAppTheme.ts
│  ├── useAuth.ts
│  ├── useBoolean.ts
│  ├── useCachedResources.ts
│  ├── useCustomMap.ts
│  ├── useElementSize.ts
│  ├── useImagePicker.ts
│  ├── useLayout.ts
│  ├── useMainAppData.ts
│  ├── useMyAppData.ts
│  ├── useProductView.ts
│  ├── useSelectedAddress.ts
│  └── useSSE.ts
├── landing
│  ├── css
│  │  ├── policyStyles.css
│  │  └── styles.css
│  ├── img
│  │  ├── habit-run.gif
│  │  ├── icon.png
│  │  ├── image.png
│  │  ├── logo.png
│  │  └── timi_logo.png
│  ├── index.html
│  ├── policy.html
│  ├── script.js
│  └── term.html
├── navigation
│  ├── AppContainer.tsx
│  ├── Loading.tsx
│  ├── MainBottomTab.tsx
│  ├── RootNavigation.tsx
│  └── types.ts
├── package.json
├── react-native-web-refresh-control.d.ts
├── README.md
├── screens
│  ├── address
│  │  ├── AddAddress.tsx
│  │  ├── AddressDetails.tsx
│  │  └── MyAddress.tsx
│  ├── auth
│  │  ├── ForgotPassword.tsx
│  │  ├── SignIn.tsx
│  │  └── SignUp.tsx
│  ├── blog
│  │  ├── BlogDetails.tsx
│  │  └── BlogFashion
│  │    ├── BlogFashion.tsx
│  │    └── components
│  │      ├── Hot24h.tsx
│  │      └── Trendy.tsx
│  ├── chat
│  │  ├── ChatRoom.tsx
│  │  ├── ChatScreen.tsx
│  │  └── components
│  │    └── ChatUserCard.tsx
│  ├── feed
│  │  ├── components
│  │  │  ├── NewsFeedCommentItem.tsx
│  │  │  ├── NewsFeedCommentReplies.tsx
│  │  │  ├── NewsFeedCommentReplyItem.tsx
│  │  │  ├── NewsFeedComments.tsx
│  │  │  └── NewsFeedItem.tsx
│  │  ├── NewsFeedNewPost.tsx
│  │  └── NewsFeedScreen.tsx
│  ├── home
│  │  ├── components
│  │  │  ├── Banner.tsx
│  │  │  └── Header.tsx
│  │  └── HomeScreen.tsx
│  ├── ImageDetail.tsx
│  ├── ImageSelectScreen.tsx
│  ├── ModalScreen.tsx
│  ├── NotFoundScreen.tsx
│  ├── order
│  │  ├── CheckOut.tsx
│  │  ├── components
│  │  │  ├── CheckOutAddress.tsx
│  │  │  ├── OrderCard.tsx
│  │  │  ├── OrderCardItem.tsx
│  │  │  ├── OrderCardList.tsx
│  │  │  ├── PayNowCardList.tsx
│  │  │  └── TrackOrderItem.tsx
│  │  ├── MyCart.tsx
│  │  ├── MyOrder.tsx
│  │  ├── OrderDetails.tsx
│  │  ├── OrderTracking.tsx
│  │  └── WebViewOpn.tsx
│  ├── product
│  │  ├── components
│  │  │  ├── ProductDetailsChooseVariant.tsx
│  │  │  ├── ProductInformation.tsx
│  │  │  └── RateItem.tsx
│  │  ├── ProductDetails.tsx
│  │  ├── ProductReview.tsx
│  │  ├── ProductReviewNew.tsx
│  │  └── ProductSize.tsx
│  ├── profile
│  │  ├── components
│  │  │  ├── NotificationItem.tsx
│  │  │  ├── ProfileEditPassword.tsx
│  │  │  ├── ProfileMoreMenu.tsx
│  │  │  ├── ProfileProductGrid.tsx
│  │  │  └── VoucherItem.tsx
│  │  ├── MyVoucher.tsx
│  │  ├── NotificationScreen.tsx
│  │  ├── ProfileEdit.tsx
│  │  ├── ProfileOtherView.tsx
│  │  ├── ProfileScreen.tsx
│  │  ├── RecentView.tsx
│  │  ├── SettingScreen.tsx
│  │  └── Wishlist.tsx
│  ├── search
│  │  ├── CategoriesScreen.tsx
│  │  ├── components
│  │  │  ├── BannerCategories.tsx
│  │  │  ├── FilterProduct.tsx
│  │  │  └── FilterProductChips.tsx
│  │  └── SearchScreen.tsx
│  ├── seller
│  │  ├── components
│  │  │  └── PriceTable.tsx
│  │  ├── SellerOrderGroup.tsx
│  │  ├── SellerProductAdd.tsx
│  │  ├── SellerProductEdit.tsx
│  │  ├── SellerProductList.tsx
│  │  ├── SellerScreen.tsx
│  │  └── SellerVerifyAccount.tsx
│  └── TermOfUse
│    ├── components
│    │  ├── Chevron.tsx
│    │  └── TermItem.tsx
│    └── TermOfUseScreen.tsx
├── scripts
│  └── deploy.sh
├── tsconfig.json
├── utils
│  ├── api.ts
│  ├── consoleSuppressor.ts
│  ├── constants
│  │  ├── constants.ts
│  │  ├── data.ts
│  │  ├── theme
│  │  │  ├── appTheme.json
│  │  │  ├── dark.json
│  │  │  ├── light.json
│  │  │  └── mapping.json
│  │  └── types.ts
│  ├── dayjs.ts
│  ├── env.ts
│  ├── i18n
│  │  ├── config.ts
│  │  ├── en
│  │  │  ├── common.json
│  │  │  └── term_of_use.json
│  │  ├── language-detector.ts
│  │  └── th
│  │    ├── common.json
│  │    └── term_of_use.json
│  ├── keyExtractor.ts
│  ├── locationPermission.ts
│  ├── misc.ts
│  ├── numbers.ts
│  └── pushNotification.ts
└── yarn.lock