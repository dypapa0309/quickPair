const drinks = [
    { id: 1, name: '샤르도네', type: '와인', flavor: '달콤함', aroma: '과일향', texture: '부드러움', alcoholContent: 13, origin: '프랑스', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '데이트', alcoholPreference: '중간' },
    { id: 2, name: '아사히 수퍼 드라이', type: '맥주', flavor: '쓴맛', aroma: '홉향', texture: '가벼움', alcoholContent: 5, origin: '일본', priceRange: '저렴', mood: '기분 업할 때', season: '여름', weather: '더운 날', timeOfDay: '점심', event: '친구와 함께 있을 때', alcoholPreference: '낮음' },
    { id: 3, name: '조니 워커 블랙', type: '위스키', flavor: '스모키', aroma: '나무향', texture: '묵직함', alcoholContent: 40, origin: '스코틀랜드', priceRange: '고급', mood: '로맨틱할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '데이트', alcoholPreference: '높음' },
    { id: 4, name: '참이슬', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 17, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 5, name: '하이트', type: '맥주', flavor: '상쾌함', aroma: '약한 홉향', texture: '가벼움', alcoholContent: 4.5, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '더운 날', timeOfDay: '점심', event: '파티', alcoholPreference: '낮음' },
    { id: 6, name: '모엣 샹동 임페리얼', type: '샴페인', flavor: '상큼함', aroma: '시트러스향', texture: '가벼움', alcoholContent: 12, origin: '프랑스', priceRange: '고급', mood: '기분 업할 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '파티', alcoholPreference: '중간' },
    { id: 7, name: '마티니', type: '칵테일', flavor: '달콤함', aroma: '허브향', texture: '부드러움', alcoholContent: 15, origin: '이탈리아', priceRange: '중간', mood: '로맨틱할 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '데이트', alcoholPreference: '중간' },
    { id: 8, name: '아페롤 스프리츠', type: '칵테일', flavor: '달콤쌉쌀함', aroma: '오렌지향', texture: '상큼함', alcoholContent: 11, origin: '이탈리아', priceRange: '중간', mood: '기분 업할 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '파티', alcoholPreference: '중간' },
    { id: 9, name: '테킬라 선라이즈', type: '칵테일', flavor: '달콤함', aroma: '과일향', texture: '부드러움', alcoholContent: 12, origin: '멕시코', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '더운 날', timeOfDay: '저녁', event: '파티', alcoholPreference: '중간' },
    { id: 10, name: '피나 콜라다', type: '칵테일', flavor: '달콤함', aroma: '코코넛향', texture: '크리미함', alcoholContent: 13, origin: '푸에르토리코', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 11, name: '버드와이저', type: '맥주', flavor: '쓴맛', aroma: '홉향', texture: '가벼움', alcoholContent: 5, origin: '미국', priceRange: '저렴', mood: '기분 업할 때', season: '여름', weather: '더운 날', timeOfDay: '점심', event: '파티', alcoholPreference: '낮음' },
    { id: 12, name: '호가든', type: '맥주', flavor: '과일향', aroma: '오렌지향', texture: '부드러움', alcoholContent: 4.9, origin: '벨기에', priceRange: '중간', mood: '편안할 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '낮음' },
    { id: 13, name: '기네스', type: '맥주', flavor: '쓴맛', aroma: '커피향', texture: '크리미함', alcoholContent: 4.2, origin: '아일랜드', priceRange: '중간', mood: '편안할 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '낮음' },
    { id: 14, name: '모히토', type: '칵테일', flavor: '달콤함', aroma: '민트향', texture: '상큼함', alcoholContent: 10, origin: '쿠바', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '파티', alcoholPreference: '중간' },
    { id: 15, name: '마가리타', type: '칵테일', flavor: '상큼함', aroma: '라임향', texture: '상큼함', alcoholContent: 12, origin: '멕시코', priceRange: '중간', mood: '기분 업할 때', season: '여름', weather: '더운 날', timeOfDay: '저녁', event: '파티', alcoholPreference: '중간' },
    { id: 16, name: '보드카', type: '양주', flavor: '중립적', aroma: '중립적', texture: '깔끔함', alcoholContent: 40, origin: '러시아', priceRange: '중간', mood: '스트레스 받을 때', season: '겨울', weather: '추운 날', timeOfDay: '늦은 밤', event: '혼자 있을 때', alcoholPreference: '높음' },
    { id: 17, name: '진', type: '양주', flavor: '허브향', aroma: '허브향', texture: '깔끔함', alcoholContent: 37.5, origin: '영국', priceRange: '중간', mood: '스트레스 받을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '혼자 있을 때', alcoholPreference: '높음' },
    { id: 18, name: '럼', type: '양주', flavor: '달콤함', aroma: '바닐라향', texture: '부드러움', alcoholContent: 40, origin: '자메이카', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '높음' },
    { id: 19, name: '테킬라', type: '양주', flavor: '강렬함', aroma: '아가베향', texture: '부드러움', alcoholContent: 38, origin: '멕시코', priceRange: '중간', mood: '기분 업할 때', season: '여름', weather: '더운 날', timeOfDay: '저녁', event: '파티', alcoholPreference: '높음' },
    { id: 20, name: '소주', type: '소주', flavor: '중립적', aroma: '중립적', texture: '깔끔함', alcoholContent: 20, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    // 추가 데이터
    { id: 21, name: '한라산', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 22, name: '처음처럼', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 18, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 23, name: '금복주', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 17.5, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 24, name: '제주감귤주', type: '과일 소주', flavor: '달콤함', aroma: '감귤향', texture: '부드러움', alcoholContent: 16, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 25, name: '한라산 21도', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 26, name: '백세주', type: '약주', flavor: '달콤함', aroma: '인삼향', texture: '부드러움', alcoholContent: 13, origin: '한국', priceRange: '중간', mood: '편안할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 27, name: '설중매', type: '매실주', flavor: '달콤함', aroma: '매실향', texture: '부드러움', alcoholContent: 14, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 28, name: '막걸리', type: '막걸리', flavor: '달콤함', aroma: '쌀향', texture: '부드러움', alcoholContent: 6, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '낮음' },
    { id: 29, name: '진로', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.5, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 30, name: '시원소주', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.9, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 31, name: '처음처럼 순한', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.8, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 32, name: '새로', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 17.5, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 33, name: '참이슬 후레쉬', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.9, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 34, name: '설중매 순한맛', type: '매실주', flavor: '달콤함', aroma: '매실향', texture: '부드러움', alcoholContent: 14, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 35, name: '한라산 로얄', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 20.1, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 36, name: '백세주 21', type: '약주', flavor: '달콤함', aroma: '인삼향', texture: '부드러움', alcoholContent: 13, origin: '한국', priceRange: '중간', mood: '편안할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 37, name: '감홍로', type: '과일주', flavor: '달콤함', aroma: '사과향', texture: '부드러움', alcoholContent: 12, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 38, name: '송이주', type: '약주', flavor: '달콤함', aroma: '송이향', texture: '부드러움', alcoholContent: 15, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 39, name: '산사춘', type: '약주', flavor: '달콤함', aroma: '산사향', texture: '부드러움', alcoholContent: 14, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 40, name: '오미자주', type: '과일주', flavor: '달콤함', aroma: '오미자향', texture: '부드러움', alcoholContent: 14, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 41, name: '서울의 밤', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.8, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 42, name: '처음처럼 로얄', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 18.1, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 43, name: '금복주 21', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 44, name: '제주감귤주 21', type: '과일 소주', flavor: '달콤함', aroma: '감귤향', texture: '부드러움', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 45, name: '한라산 블루', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 46, name: '백세주 25', type: '약주', flavor: '달콤함', aroma: '인삼향', texture: '부드러움', alcoholContent: 25, origin: '한국', priceRange: '중간', mood: '편안할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '중간' },
    { id: 47, name: '설중매 25', type: '매실주', flavor: '달콤함', aroma: '매실향', texture: '부드러움', alcoholContent: 25, origin: '한국', priceRange: '중간', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '피크닉', alcoholPreference: '중간' },
    { id: 48, name: '막걸리 21', type: '막걸리', flavor: '달콤함', aroma: '쌀향', texture: '부드러움', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', alcoholPreference: '낮음' },
    { id: 49, name: '진로 이즈백', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 16.5, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' },
    { id: 50, name: '시원소주 21', type: '소주', flavor: '중립적', aroma: '약한 향', texture: '깔끔함', alcoholContent: 21, origin: '한국', priceRange: '저렴', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '친구와 함께 있을 때', alcoholPreference: '중간' }
];


const snacks = [
    { id: 1, name: '브리 치즈', type: '치즈', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '꿀', mood: '편안할 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 2, name: '닭 날개', type: '고기', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '핫 소스', mood: '신날 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '파티', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 3, name: '새우 튀김', type: '해산물', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '타르타르 소스', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 4, name: '훈제 연어', type: '해산물', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '크림치즈', mood: '로맨틱할 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 5, name: '소시지', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '머스타드', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 6, name: '바베큐 폭립', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '바베큐 소스', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '파티', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 7, name: '감자튀김', type: '스낵', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '케첩', mood: '편안할 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '친구와 함께 있을 때', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 8, name: '치킨 너겟', type: '고기', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '스위트 앤 사워 소스', mood: '신날 때', season: '겨울', weather: '추운 날', timeOfDay: '점심', event: '파티', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 9, name: '미트볼', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '토마토 소스', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 10, name: '초콜릿', type: '디저트', flavor: '달콤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '눈 오는 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '차가운 음식', mealType: '후식' },
    { id: 11, name: '살라미', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '머스타드', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 12, name: '구운 가래떡', type: '스낵', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '고추장', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 13, name: '김치전', type: '전', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '간장', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '점심', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 14, name: '해물파전', type: '전', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '간장', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '점심', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 15, name: '참치 샐러드', type: '샐러드', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '마요네즈', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 16, name: '과일 플래터', type: '디저트', flavor: '달콤함', texture: '다양함', recommendedSauce: '요거트', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '후식' },
    { id: 17, name: '치즈 플래터', type: '치즈', flavor: '짭짤함', texture: '다양함', recommendedSauce: '꿀', mood: '편안할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 18, name: '토마토 브루스케타', type: '스낵', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '발사믹 소스', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 19, name: '갈릭 브레드', type: '스낵', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '없음', mood: '편안할 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 20, name: '스테이크', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '스테이크 소스', mood: '기분 좋을 때', season: '겨울', weather: '눈 오는 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '따뜻한 음식', mealType: '본식' },
    // 추가 데이터
    { id: 21, name: '까망베르 치즈', type: '치즈', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '꿀', mood: '편안할 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '데이트', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 22, name: '치즈스틱', type: '스낵', flavor: '짭짤함', texture: '바삭함', recommendedSauce: '마리나라 소스', mood: '신날 때', season: '겨울', weather: '추운 날', timeOfDay: '점심', event: '파티', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 23, name: '모짜렐라 샐러드', type: '샐러드', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '발사믹 소스', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 24, name: '과일치즈 샐러드', type: '샐러드', flavor: '달콤함', texture: '다양함', recommendedSauce: '요거트', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '후식' },
    { id: 25, name: '카프레제 샐러드', type: '샐러드', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '발사믹 소스', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '점심', event: '피크닉', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 26, name: '훈제 오리', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '머스타드', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 27, name: '삼겹살', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '쌈장', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 28, name: '김치찌개', type: '찌개', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '눈 오는 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 29, name: '된장찌개', type: '찌개', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 30, name: '떡볶이', type: '스낵', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '점심', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '전식' },
    { id: 31, name: '오징어볶음', type: '해산물', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 32, name: '해물탕', type: '탕', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '눈 오는 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 33, name: '순두부찌개', type: '찌개', flavor: '매콤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 34, name: '간장게장', type: '해산물', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '봄', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '차가운 음식', mealType: '본식' },
    { id: 35, name: '갈비찜', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 36, name: '생선구이', type: '해산물', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 37, name: '문어숙회', type: '해산물', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '초고추장', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '차가운 음식', mealType: '전식' },
    { id: 38, name: '전복구이', type: '해산물', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 39, name: '물회', type: '해산물', flavor: '매콤함', texture: '부드러움', recommendedSauce: '초고추장', mood: '기분 좋을 때', season: '여름', weather: '더운 날', timeOfDay: '점심', event: '가족 모임', foodTemperature: '차가운 음식', mealType: '본식' },
    { id: 40, name: '아구찜', type: '해산물', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 41, name: '삼겹살김치볶음', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 42, name: '차돌박이', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '소금', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 43, name: '돼지갈비', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 44, name: '치즈불닭', type: '고기', flavor: '매콤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '더운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 45, name: '보쌈', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '쌈장', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 46, name: '족발', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '쌈장', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 47, name: '제육볶음', type: '고기', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '맑은 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 48, name: '낙지볶음', type: '해산물', flavor: '매콤함', texture: '쫄깃함', recommendedSauce: '없음', mood: '기분 좋을 때', season: '여름', weather: '더운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 49, name: '돼지불고기', type: '고기', flavor: '짭짤함', texture: '부드러움', recommendedSauce: '없음', mood: '기분 좋을 때', season: '가을', weather: '흐림', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' },
    { id: 50, name: '돼지껍데기', type: '고기', flavor: '짭짤함', texture: '쫄깃함', recommendedSauce: '쌈장', mood: '기분 좋을 때', season: '겨울', weather: '추운 날', timeOfDay: '저녁', event: '가족 모임', foodTemperature: '따뜻한 음식', mealType: '본식' }
];


const pairings = [
    { drinkId: 1, snackId: 1 },
    { drinkId: 2, snackId: 2 },
    { drinkId: 3, snackId: 3 },
    { drinkId: 4, snackId: 4 },
    { drinkId: 5, snackId: 5 },
    { drinkId: 6, snackId: 6 },
    { drinkId: 7, snackId: 7 },
    { drinkId: 8, snackId: 8 },
    { drinkId: 9, snackId: 9 },
    { drinkId: 10, snackId: 10 },
    { drinkId: 11, snackId: 11 },
    { drinkId: 12, snackId: 12 },
    { drinkId: 13, snackId: 13 },
    { drinkId: 14, snackId: 14 },
    { drinkId: 15, snackId: 15 },
    { drinkId: 16, snackId: 16 },
    { drinkId: 17, snackId: 17 },
    { drinkId: 18, snackId: 18 },
    { drinkId: 19, snackId: 19 },
    { drinkId: 20, snackId: 20 },
    { drinkId: 21, snackId: 21 },
    { drinkId: 22, snackId: 22 },
    { drinkId: 23, snackId: 23 },
    { drinkId: 24, snackId: 24 },
    { drinkId: 25, snackId: 25 },
    { drinkId: 26, snackId: 26 },
    { drinkId: 27, snackId: 27 },
    { drinkId: 28, snackId: 28 },
    { drinkId: 29, snackId: 29 },
    { drinkId: 30, snackId: 30 },
    { drinkId: 31, snackId: 31 },
    { drinkId: 32, snackId: 32 },
    { drinkId: 33, snackId: 33 },
    { drinkId: 34, snackId: 34 },
    { drinkId: 35, snackId: 35 },
    { drinkId: 36, snackId: 36 },
    { drinkId: 37, snackId: 37 },
    { drinkId: 38, snackId: 38 },
    { drinkId: 39, snackId: 39 },
    { drinkId: 40, snackId: 40 },
    { drinkId: 41, snackId: 41 },
    { drinkId: 42, snackId: 42 },
    { drinkId: 43, snackId: 43 },
    { drinkId: 44, snackId: 44 },
    { drinkId: 45, snackId: 45 },
    { drinkId: 46, snackId: 46 },
    { drinkId: 47, snackId: 47 },
    { drinkId: 48, snackId: 48 },
    { drinkId: 49, snackId: 49 },
    { drinkId: 50, snackId: 50 }
];


let lastRecommendation = null;
let userSelections = {};

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    document.getElementById('start-button').addEventListener('click', showMainContent);
    document.getElementById('get-pairing').addEventListener('click', recommendPairings);
    document.getElementById('close-popup').addEventListener('click', closePopup);
    document.getElementById('share-friend').addEventListener('click', copyToClipboard);
    document.getElementById('share-kakao').addEventListener('click', shareKakao);

    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', toggleOptionList);
    });

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', selectOption);
    });
}

function showMainContent() {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

function toggleOptionList(event) {
    const categoryItem = event.currentTarget.closest('.category-item');
    const optionList = categoryItem.querySelector('.option-list');
    const arrowIcon = categoryItem.querySelector('.arrow-down');

    if (optionList.classList.contains('show')) {
        optionList.classList.remove('show');
        arrowIcon.classList.remove('rotated');
    } else {
        document.querySelectorAll('.option-list').forEach(list => {
            list.classList.remove('show');
        });
        document.querySelectorAll('.arrow-down').forEach(arrow => {
            arrow.classList.remove('rotated');
        });

        optionList.classList.add('show');
        arrowIcon.classList.add('rotated');
    }
}

function selectOption(event) {
    event.stopPropagation();
    const button = event.target;
    const categoryItem = button.closest('.category-item');
    const categoryHeader = categoryItem.querySelector('.category-header span');
    const value = button.textContent;

    userSelections[categoryItem.id] = value;

    categoryHeader.textContent = value;

    categoryItem.querySelector('.option-list').classList.remove('show');
    categoryItem.querySelector('.arrow-down').classList.remove('rotated');

    categoryItem.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');

    console.log(`Selected ${categoryItem.id}: ${value}`);
}

function calculateScore(drink, snack, criteria) {
    if (drink.type !== criteria.type) return 0;

    let score = 0;
    const weights = {
        mood: 2.5,
        weather: 1.5,
        season: 2,
        timeOfDay: 1.5,
        event: 2,
        alcoholPreference: 1.5
    };

    for (let criterion in weights) {
        if (criteria[criterion]) {
            if (drink[criterion] === criteria[criterion]) score += weights[criterion];
            if (snack[criterion] === criteria[criterion]) score += weights[criterion] / 2;
        }
    }

    if (drink.flavor === snack.flavor) score += 1;
    if (drink.texture === snack.texture) score += 1;

    return score;
}

function recommendPairings() {
    const criteria = {
        type: userSelections['drink-type'],
        mood: userSelections['mood'],
        weather: userSelections['weather'],
        season: userSelections['season'],
        timeOfDay: userSelections['time-of-day'],
        event: userSelections['event'],
        alcoholPreference: userSelections['alcohol-preference']
    };

    const scoredPairings = pairings.map(pairing => {
        const drink = drinks.find(d => d.id === pairing.drinkId);
        const snack = snacks.find(s => s.id === pairing.snackId);
        const score = calculateScore(drink, snack, criteria);
        return { drink, snack, score };
    }).filter(item => item.score > 0);

    scoredPairings.sort((a, b) => b.score - a.score);

    const topScore = scoredPairings[0]?.score;
    const topPairings = scoredPairings.filter(p => p.score >= topScore * 0.9);

    let selectedPairing;
    do {
        selectedPairing = topPairings[Math.floor(Math.random() * topPairings.length)];
    } while (lastRecommendation && 
             lastRecommendation.drink.id === selectedPairing.drink.id && 
             lastRecommendation.snack.id === selectedPairing.snack.id && 
             topPairings.length > 1);

    lastRecommendation = selectedPairing;

    displayPairing(selectedPairing);
}

function displayPairing(pairing) {
    const resultPopup = document.getElementById('result-popup');
    const pairingResult = document.getElementById('pairing-result');

    if (!pairing) {
        pairingResult.textContent = '추천 페어링을 찾을 수 없습니다. 다른 조건을 선택해 보세요.';
    } else {
        const { drink, snack } = pairing;
        pairingResult.innerHTML = `
            <h3>${drink.name}와 ${snack.name}</h3>
            <p><strong>술:</strong> ${drink.flavor}, ${drink.aroma}, ${drink.texture}</p>
            <p><strong>안주:</strong> ${snack.flavor}, ${snack.texture}, 추천 소스: ${snack.recommendedSauce}</p>
        `;
    }

    resultPopup.classList.remove('hidden');
}

function closePopup() {
    document.getElementById('result-popup').classList.add('hidden');
}

function copyToClipboard() {
    const pairingText = document.getElementById('pairing-result').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = pairingText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('추천 페어링이 클립보드에 복사되었습니다.');
}

function shareKakao() {
    if (typeof Kakao === 'undefined') {
        alert('카카오톡 SDK가 로드되지 않았습니다.');
        return;
    }

    const pairingText = document.getElementById('pairing-result').innerText;

    Kakao.Link.sendDefault({
        objectType: 'text',
        text: `QuickPair 추천: ${pairingText}`,
        link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
        },
    });
}
